import BrowserCards from './components/browser-cards/browser-cards.component';
import Slider from './components/slider/slider.component';

export default function Features() {
  return (
    <div className="grid gap-y-[4.5rem]">
      <div className="grid gap-y-10">
        <div>
          <h2 className="mb-4">Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <Slider />
      </div>
      <div className="grid gap-y-10">
        <div>
          <h2 className="mb-4">Download the extension</h2>
          <p>
            We&apos;ve got more browsers in the pipeline. Please do let us know
            if you&apos;ve got a favourite you&apos;d like us to prioritize.
          </p>
        </div>
        <div>
          <BrowserCards />
        </div>
      </div>
    </div>
  );
}
