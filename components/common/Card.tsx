import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const SectionTitle = ({ title }:{title : string}) => (
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
    {title}
  </h2>
);

const StatCard = ({ icon: Icon, title, description }:{icon:any, title:string, description:string}) => (
  <Card>
    <CardContent className="flex flex-col items-center space-y-2 p-6">
      <Icon className="h-12 w-12 text-green-600" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

const EventCard = ({ date, title, description, color }: {date:any, title: string, description : string, color: string}) => (
  <Card className={color}>
    <CardContent className="p-6">
      <p className="text-sm font-medium">{date}</p>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {description}
      </p>
      <Button variant="link" className="mt-4 p-0">
        Learn More
      </Button>
    </CardContent>
  </Card>
);

export { EventCard, StatCard, SectionTitle };
