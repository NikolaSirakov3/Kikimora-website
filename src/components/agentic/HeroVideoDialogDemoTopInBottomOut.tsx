import HeroVideo from "@/components/agentic/HeroVideo";
import HeroTextList from "@/components/agentic/HeroTextList";

export function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <HeroVideo />
          <HeroTextList />
        </div>
      </div>
    </section>
  );
}

export default HeroVideoDialogDemoTopInBottomOut;
