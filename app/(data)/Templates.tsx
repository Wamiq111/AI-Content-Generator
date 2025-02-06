export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche & outline and give me the result in Rich Text Editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in Rich Text Editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates catchy and viral-worthy blog post titles based on your chosen niche.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet points only (no description) based on niche in Rich Text Editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required: true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that generates catchy and SEO-optimized YouTube video titles based on keywords and outline.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me the best SEO optimized high-ranked 5 title ideas in bullet points only based on keywords and outline and give me the result in HTML tags format',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter YouTube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that generates a catchy YouTube video description with emojis under 4-5 lines based on topic and outline.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate YouTube description with emojis under 4-5 lines based on topic and outline in Rich Text Editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that generates 10 YouTube tags based on title and outline.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 YouTube tags in bullet points based on title and outline in Rich Text Editor format',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter YouTube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing articles or blog posts to bypass AI detectors and make it plagiarism-free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the given article without any plagiarism in Rich Text Editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, rewrite the text without any grammar mistakes and professionally in Rich Text Editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that adds emojis to your text based on the outline and rewrites it in Rich Text Editor format.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'Blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add emoji to the outline text based on the outline and rewrite it in Rich Text Editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that generates 3 Instagram posts based on given keywords in Rich Text Editor format.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Blog',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram posts based on given keywords and provide the output in Rich Text Editor format',
        form: [
            {
                label: 'Enter keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that generates 15 Instagram hashtags based on given keywords in Rich Text Editor format.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'Blog',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hashtags based on given keywords and provide the output in Rich Text Editor format',
        form: [
            {
                label: 'Enter keywords for your Instagram hashtags',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generates new and trending Instagram ideas based on your niche.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'Instagram',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram ideas based on niche with the latest trends and provide the output in Rich Text Editor format',
        form: [
            {
                label: 'Enter keywords/niche for your Instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            },
        ]
    },
    {
        name: 'English Grammar Check',
        desc: 'AI model to correct your English grammar by providing the text.',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'English',
        slug: 'english-grammar-checker',
        aiPrompt: 'Rewrite the input text by correcting the grammar and provide the output in Rich Text Editor format',
        form: [
            {
                label: 'Enter text to correct the grammar',
                field: 'input',
                name: 'inputText',
                required: true
            },
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI model to generate programming code in any language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Based on the user code description, write a code and provide the output in Rich Text Editor format in a code block',
        form: [
            {
                label: 'Enter description of code you want along with Programming Language',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            },
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI model to explain programming code in any language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Based on the user code input, explain code line by line and provide the output in Rich Text Editor format in a code block',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            },
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, such as error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon: 'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'Code Bug Detector',
        slug: 'code-bug-detector',
        aiPrompt: 'Based on the user code input, find bugs in the code and provide solutions in Rich Text Editor format in a code block',
        form: [
            {
                label: 'Enter code which you want to test for bugs',
                field: 'textarea',
                name: 'codeInput',
                required: true
            },
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI tool assist you in creating a tagline that stands out.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketing',
        slug: 'tagline-generator',
        aiPrompt: 'Based on the user product name and outline, generate catchy 5-10 taglines for the business product and provide the output in Rich Text Editor format',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What you are selling/Marketing',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    {
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon: 'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketing',
        slug: 'product-description',
        aiPrompt: 'Based on the user product name and description, generate a small description for the product for e-commerce business and provide the output in Rich Text Editor format',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            },
        ]
    },
    
       
];