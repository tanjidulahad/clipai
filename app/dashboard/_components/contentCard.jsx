import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const ContetnCard = ({data,setCurrentContent}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={()=>setCurrentContent(data)}>View your prompt</Button>
            </CardFooter>
        </Card>

    );
};

export default ContetnCard;