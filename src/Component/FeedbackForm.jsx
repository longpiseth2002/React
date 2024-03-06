import { Label, Textarea } from 'flowbite-react';

function FeedbackForm() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label className=' text-xl font-normal pt- ' htmlFor="comment" value="Feedback" />
      </div>
      <Textarea id="comment" placeholder="Feedback comment..." required rows={5} />
    </div>
  );
};


export default FeedbackForm;