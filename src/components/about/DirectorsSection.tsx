
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Director {
  title: string;
  name: string;
  email?: string;
  phone: string;
}

const directors: Director[] = [
  {
    title: "Managing Director",
    name: "HLN Sastry",
    email: "hlnsastry@sridattaelectronics.com",
    phone: "+91 9492430198"
  },
  {
    title: "Director",
    name: "Hari Swarnalatha",
    phone: "+91 9505889636"
  },
  {
    title: "Director",
    name: "Siri Parvathi Hari",
    phone: "-"
  }
];

const DirectorsSection = () => {
  return (
    <section id="directors" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Board of Directors</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our experienced leadership team guides Sri Datta Electronics with strategic vision 
            and industry expertise, ensuring excellence in defense and aerospace solutions.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-tech-blue hover:bg-tech-blue">
                  <TableHead className="text-white font-semibold text-base py-4">Title</TableHead>
                  <TableHead className="text-white font-semibold text-base py-4">Name</TableHead>
                  <TableHead className="text-white font-semibold text-base py-4">Email</TableHead>
                  <TableHead className="text-white font-semibold text-base py-4">Phone</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {directors.map((director, index) => (
                  <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium text-tech-blue py-6 px-6 text-base">{director.title}</TableCell>
                    <TableCell className="font-semibold py-6 px-6 text-base text-tech-black">{director.name}</TableCell>
                    <TableCell className="py-6 px-6">
                      {director.email ? (
                        <a 
                          href={`mailto:${director.email}`}
                          className="text-tech-blue hover:underline transition-colors"
                        >
                          {director.email}
                        </a>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell className="py-6 px-6">
                      <a 
                        href={`tel:${director.phone}`}
                        className="text-tech-blue hover:underline transition-colors"
                      >
                        {director.phone}
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
