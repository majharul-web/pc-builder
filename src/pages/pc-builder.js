import RootLayout from "@/components/Layouts/RootLayout";

const PcBuilder = () => {
  return (
    <div>
      <h3>tex</h3>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
