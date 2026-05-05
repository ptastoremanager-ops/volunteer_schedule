import { ReactNode } from 'react';
import {
  CalendarDays, ListChecks, LogIn, ChevronRight, ChevronLeft,
  MousePointerClick, X, MessageSquare,
} from 'lucide-react';
import Navbar from '../components/Navbar';

interface SectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

function Section({ icon, title, children }: SectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          {icon}
        </span>
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
      </div>
      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  );
}

function Step({ n, text }: { n: number; text: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
        {n}
      </span>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

function Tip({ text }: { text: ReactNode }) {
  return (
    <div className="flex items-start gap-2 mt-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
      <span className="text-indigo-500 text-xs font-bold mt-0.5 flex-shrink-0">TIP</span>
      <p className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">How to Use the Volunteer Scheduler</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Everything you need to know to manage your shifts.
          </p>
        </div>

        <Section icon={<LogIn className="w-5 h-5" />} title="Registering & Signing In">
          <Step n={1} text="Go to the Register page and enter your full name, email, and a password (at least 8 characters)." />
          <Step n={2} text="You will receive a confirmation email — click the link inside to verify your account." />
          <Step n={3} text="Once verified, return to the site and sign in with your email and password." />
        </Section>

        <Section icon={<CalendarDays className="w-5 h-5" />} title="Navigating the Schedule">
          <Step n={1} text={<>The <strong>Schedule</strong> tab shows a week at a time, Monday through Friday.</>} />
          <Step n={2} text={<>Use the <ChevronLeft className="w-3.5 h-3.5 inline" /> <strong>Prev</strong> and <strong>Next</strong> <ChevronRight className="w-3.5 h-3.5 inline" /> buttons at the top to move between weeks.</>} />
          <Step n={3} text="Each day shows two shifts: Morning (8 AM – 12 PM) and Afternoon (12 PM – 4 PM). Green slots are filled, red slots are open." />
          <Step n={4} text="Days that are grayed out are closed for that day." />
          <Tip text="Today's date is highlighted in yellow. Click 'Back to today' if you've navigated away." />
        </Section>

        <Section icon={<MousePointerClick className="w-5 h-5" />} title="Signing Up for a Shift">
          <Step n={1} text="Click on any shift card on the Schedule to open the shift detail page." />
          <Step n={2} text="If the shift is in the future and has open slots, you will see a red 'Slot – Open' row with a Sign Up button." />
          <Step n={3} text="Click Sign Up. Your name will appear in the slot immediately." />
          <Tip text="Morning shifts allow up to 2 volunteers. Afternoon shifts allow up to 3. The Sign Up button disappears when a shift is full." />
        </Section>

        <Section icon={<X className="w-5 h-5" />} title="Cancelling Your Signup">
          <Step n={1} text="Open the shift detail page for the shift you want to cancel." />
          <Step n={2} text={<>Click the <X className="w-3.5 h-3.5 inline" /> icon next to your name.</>} />
          <Step n={3} text="Confirm the cancellation in the dialog box. Your slot will open back up for others." />
          <Tip text="You can only cancel future shifts. Past shifts are locked." />
        </Section>

        <Section icon={<ListChecks className="w-5 h-5" />} title="Viewing Your Shifts">
          <Step n={1} text={<>Click <strong>My Shifts</strong> in the top navigation bar.</>} />
          <Step n={2} text="This page lists all your upcoming shifts sorted by date, along with the shift time." />
          <Step n={3} text={<>Click <strong>Add to Calendar</strong> to download a <code>.ics</code> file — open it to import all your upcoming shifts into Apple Calendar, Google Calendar, or Outlook at once.</>} />
        </Section>

        <Section icon={<MessageSquare className="w-5 h-5" />} title="Comments & Coverage Requests">
          <Step n={1} text="On any shift detail page, scroll down to the Comments section." />
          <Step n={2} text="Type a message and click Post to leave a note visible to all volunteers." />
          <Step n={3} text={<>If you cannot make a shift you signed up for, check <strong>"I need coverage for this shift"</strong> before posting. This flags your comment in red so others know a slot needs covering.</>} />
          <Step n={4} text="You can delete your own comments using the trash icon." />
          <Tip text="If you need someone to cover your shift, post a coverage request as early as possible so other volunteers have time to see it." />
        </Section>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600 pb-4">
          Questions? Contact your PTA store manager.
        </p>
      </div>
    </div>
  );
}
