"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from 'next/link'
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModal'; // Ensure the path is correct
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug']);

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);

    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = `${JSON.stringify(formData)}, ${SelectedPrompt}`;

      const result = await chatSession.sendMessage(FinalAIPrompt);
      const responseText = await result.response.text(); 

      // Check if responseText is valid before saving to DB
      if (responseText) {
        await SaveInDB(formData, selectedTemplate?.slug, responseText);
        console.log("Response text saved to DB:", responseText);
        setAiOutput(responseText);
      } else {
        console.error("No response text generated.");
      }
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDB = async (formData: any, slug: string | undefined, aiResp: string) => {
    if (!slug || !user?.primaryEmailAddress?.emailAddress) {
      console.error("Slug or user email is missing");
      return; 
    }

    const dataToInsert = {
      formData: JSON.stringify(formData), 
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user.primaryEmailAddress.emailAddress, 
      createdAt: moment().format('DD/MM/YYYY'), 
    };

    console.log("Attempting to save the following data to DB:", dataToInsert);

    try {
      await db.insert(AIOutput).values(dataToInsert);
      console.log("Data saved successfully to the database.");
    } catch (dbError) {
      console.error("Error saving to the database:", dbError);
    }
  };

  return (
    <div className='p-10'>
      <Link href="/dashboard" passHref>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
