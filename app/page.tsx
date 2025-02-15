<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Content Generator - Create Content Instantly</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #eef2f3;
            text-align: center;
            color: #333;
        }

        header {
            background: linear-gradient(135deg, #007bff, #6610f2);
            color: white;
            padding: 40px 20px;
            font-size: 24px;
        }

        .hero {
            padding: 60px 20px;
            background: #ffffff;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            margin: 20px;
            border-radius: 10px;
        }

        .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 50px 20px;
        }

        .feature {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
            width: 320px;
            text-align: center;
            transition: transform 0.3s ease-in-out;
        }

        .feature:hover {
            transform: scale(1.05);
        }

        .feature i {
            color: #007bff;
            margin-bottom: 10px;
        }

        .cta {
            margin: 50px 0;
        }

        .cta button {
            background: linear-gradient(135deg, #28a745, #218838);
            color: white;
            padding: 15px 30px;
            border: none;
            outline: none;
            font-size: 18px;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
            font-family: Arial, sans-serif;
        }

        .cta button:hover {
            background: linear-gradient(135deg, #218838, #1e7e34);
            transform: scale(1.05);
        }

        footer {
            background: #343a40;
            color: white;
            padding: 20px;
            margin-top: 50px;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <header>
        <h1>AI Content Generator</h1>
        <p>Create high-quality content instantly with AI-powered tools.</p>
    </header>

    <section class="hero">
        <h2>Generate Content in Seconds</h2>
        <p>Save time and effort with AI-generated articles, blogs, and more.</p>
    </section>

    <section class="features">
        <div class="feature">
            <i class="fas fa-rocket fa-3x"></i>
            <h3>Fast & Efficient</h3>
            <p>Get content generated instantly with just a few clicks.</p>
        </div>
        <div class="feature">
            <i class="fas fa-brain fa-3x"></i>
            <h3>AI-Powered</h3>
            <p>Advanced AI algorithms ensure high-quality content output.</p>
        </div>
        <div class="feature">
            <i class="fas fa-edit fa-3x"></i>
            <h3>Customizable</h3>
            <p>Modify and tweak content as per your needs.</p>
        </div>
    </section>

    <section class="cta">
        <h2>Start Creating Content Now</h2>
        <button onclick="window.location.href='dashboard.html'">Get Started</button>
    </section>

    <footer>
        <p>&copy; 2025 AI Content Generator. All rights reserved.</p>
    </footer>
</body>

</html>
