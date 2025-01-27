import HeroVideoDialog from "./ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className=" mt-4 rounded-xl w-[600px]">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/COVzowbJ9Ag"
        thumbnailSrc="https://i.ibb.co/MP5cq1z/Get-Started-With-Tippy.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/COVzowbJ9Ag"
        thumbnailSrc="https://i.ibb.co/MP5cq1z/Get-Started-With-Tippy.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
