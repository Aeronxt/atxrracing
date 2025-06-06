import Link from "next/link"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="bg-black text-secondary-foreground py-12">
      <div className="container flex flex-col items-center justify-center gap-4">
        <Icons.logo 
          src="https://wrczctvglyhprlbkogjb.supabase.co/storage/v1/object/public/webimages//atxrlog%20white%20(1).png"
          alt="ATXR Racing Logo"
          className="h-12 w-12"
        />
        <span className="font-montserrat text-lg">© {new Date().getFullYear()} ATXR Racing. All rights reserved.</span>
      </div>
    </footer>
  )
}