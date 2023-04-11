import Button from '@/components/button/button.component';
import Accordion from './component/accordion/accordion.component';

interface IQA {
  title: string;
  content: string;
}

const accordionData: IQA[] = [
  {
    title: 'What is Bookmark?',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
          justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
  },
  {
    title: 'How can I request a new browser?',
    content: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
      Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
      ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
      Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
  },
  {
    title: 'Is there a mobile app?',
    content: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
      urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
      sollicitudin ex et ultricies bibendum.`,
  },
  {
    title: 'What about other Chromium browsers?',
    content: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
      vitae neque eget nisl gravida pellentesque non ut velit.`,
  },
];

export default function FAQ() {
  return (
    <div className="grid gap-y-16">
      <div>
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>
      <div className="grid gap-y-12">
        <div>
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} key={title} />
          ))}
        </div>
        <div className="text-center">
          <Button color="blue">More Info</Button>
        </div>
      </div>
    </div>
  );
}
