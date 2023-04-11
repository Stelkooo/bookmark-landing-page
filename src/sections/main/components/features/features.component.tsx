import Radio from '@/components/radio/radio.component';

export default function Features() {
  return (
    <div>
      <div className="grid gap-y-10">
        <div>
          <h2 className="mb-4">Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="grid text-center text-base tracking-wide text-navy">
          <Radio value="Simple Bookmarking" />
          <Radio value="Speedy Searching" />
          <Radio value="Easy Sharing" />
        </div>
      </div>
    </div>
  );
}
