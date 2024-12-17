# Text Summarization Tool

## Description

This project is a web-based Text Summarization Tool built with Next.js and React. It allows users to input text (up to 300 words) and generates a concise summary using AI-powered summarization techniques.

## Features

- User-friendly interface for text input
- Character limit of 300 words for input text
- AI-powered text summarization using Hugging Face models
- Responsive design using Tailwind CSS and shadcn/ui components
- Loading indicators for better user experience
- Error handling for failed summarization attempts
- Server Actions for secure API calls

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Hugging Face Transformers

## Getting Started

### Prerequisites

- Node.js (v22.11.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone hhttps://github.com/anibalalpizar/nextjs-text-summarizer.git
   ```

2. Navigate to the project directory:

   ```
   cd nextjs-text-summarizer
   ```

3. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```
   HUGGINGFACE_API_KEY=your_huggingface_api_key_here
   MODEL_NAME=facebook/bart-large-cnn
   MAX_LENGTH=300
   ```

### Running the Application

1. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter or paste your text into the input area (max 300 words).
2. Click the Summarize button to generate a summary.
3. Wait for the summary to be generated.
4. View the generated summary below the input area.
5. Use the reset button to clear the input area and generated summary.

## Server Actions

This project uses Next.js Server Actions for secure API calls to the Hugging Face API. The summarization logic is implemented in a server action file, which should be located in the `src/actions` directory. This approach ensures that the API key is kept secure on the server-side.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Hugging Face](https://huggingface.co/)
