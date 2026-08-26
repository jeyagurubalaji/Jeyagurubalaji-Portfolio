<div className="mt-10 flex flex-col items-center">
  
  {/* Top Row Buttons */}
  <div className="flex flex-wrap justify-center gap-4">
    <a
      href="#projects"
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
    >
      <ArrowDown className="h-4 w-4" />
      View Projects
    </a>

    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
    >
      <Send className="h-4 w-4" />
      Contact Me
    </a>
  </div>

  {/* Resume Button */}
  <div className="mt-6">
    <a
      href="/Jeyagurubalaji_Resume.pdf"  // Make sure this file is inside public folder
      target="C:\Users\ELCOT\Downloads\Resume.pdf"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      Download Resume
    </a>
  </div>

</div>
