import SummaryForm from "@/components/SummaryForm";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-lg">
        <SummaryForm />
      </div>
    </div>
  );
}

export default Home;
