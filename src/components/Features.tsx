import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";

export default function Features() {
  return (
    <section className="flex flex-col gap-y-12 py-16 bg-gray-100" id="features">
        <div className="container max-w-screen-sm ">
            
            <SectionHeading>Unlock the full potential</SectionHeading>
                       
            <p className="mt-2 text-center text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, reiciendis distinctio sequi, molestias ex esse aspernatur voluptatibus temporibus!              
            </p>
        </div>
        <div className="container grid grid-cols-3 gap-8">
                <FeatureCard    />
                <FeatureCard    />
                <FeatureCard    />
        </div>
    </section>
  )
}
