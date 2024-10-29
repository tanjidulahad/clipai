import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import JsonViewer from "./jsonViewer";
import { Button } from "@/components/ui/button";


const ContentDetails = ({ currentContent, setCurrentContent }) => {
    return (
        <Sheet open={Object.keys(currentContent).length > 0} onOpenChange={(val) => setCurrentContent(val)}>
            <SheetContent className="flex flex-col w-full md:max-w-[50vw]" >
                <SheetHeader>
                    <SheetTitle>{currentContent.title}</SheetTitle>
                    <SheetDescription>
                        {currentContent.description}
                    </SheetDescription>
                </SheetHeader>
                {Object.keys(currentContent).length > 0 && <div className="mt-4 overflow-auto">
                    <JsonViewer jsonObject={currentContent.content} />
                </div>}
            </SheetContent>
        </Sheet>

    );
};

export default ContentDetails;