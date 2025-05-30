
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
  }
];

const DirectorsSection = () => {
  return (
    <section id="directors" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Board of Directors</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our experienced leadership team guides Sri Datta Electronics with strategic vision 
            and industry expertise, ensuring excellence in defense and aerospace solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {directors.map((director, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{director.title}</TableCell>
                  <TableCell className="font-semibold">{director.name}</TableCell>
                  <TableCell>
                    {director.email ? (
                      <a 
                        href={`mailto:${director.email}`}
                        className="text-tech-blue hover:underline"
                      >
                        {director.email}
                      </a>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>
                    <a 
                      href={`tel:${director.phone}`}
                      className="text-tech-blue hover:underline"
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
    </section>
  );
};

export default DirectorsSection;
