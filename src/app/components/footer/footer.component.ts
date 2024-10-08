import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer
      class="flex items-start justify-around bg-neutral-600 dark:bg-slate-800 transition-colors duration-300 p-10 "
    >
      <div
        class="lg:w-1/2 md:w-3/4 w-5/6 flex max-sm:flex-col max-sm:gap-8 max-sm:px-8 items-start justify-around border-x border-white/30 pt-8"
      >
        <nav class="flex flex-col gap-2 opacity-70">
          <h6 class="font-semibold mb-2">Resources</h6>
          <a class="cursor-pointer underline">Branding</a>
          <a class="cursor-pointer underline">Design</a>
          <a class="cursor-pointer underline">Marketing</a>
          <a class="cursor-pointer underline">Advertisement</a>
        </nav>
        <nav class="flex flex-col gap-2 opacity-70">
          <h6 class="font-semibold mb-2">Platform</h6>
          <a class="cursor-pointer underline">About us</a>
          <a class="cursor-pointer underline">Contact</a>
          <a class="cursor-pointer underline">Jobs</a>
          <a class="cursor-pointer underline">Press kit</a>
        </nav>
        <nav class="flex flex-col gap-2 opacity-70">
          <h6 class="font-semibold mb-2">Community</h6>
          <a class="cursor-pointer underline">Terms of use</a>
          <a class="cursor-pointer underline">Privacy policy</a>
          <a class="cursor-pointer underline">Cookie policy</a>
        </nav>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
