import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"

export default function Home() {
	return (
		
			<main className={cn("flex flex-1 flex-col items-center")}>
				<h1 className="absolute">El que lee es gay</h1>
					<SimpleEditor />
				
			</main>
		
	);
}
