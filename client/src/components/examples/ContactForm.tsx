import ContactForm from '../ContactForm';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function ContactFormExample() {
  return (
    <TooltipProvider>
      <ContactForm />
    </TooltipProvider>
  );
}