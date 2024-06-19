import FieldSizing from "$lib/FieldSizing.svelte";
import Popover from "$lib/Popover.svelte";
import AlignContent from "$lib/AlignContent.svelte";
import Fullscreen from "$lib/Fullscreen.svelte";
import TextBalance from "$lib/TextBalance.svelte";
import Has from "$lib/Has.svelte";

let uuid = 1;
export const items = [
  {
    id: uuid++,
    title: "Popover API",
    description:
      "Popover provides a standard, consistent, flexible mechanism for displaying popover content on top of other page content.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
    component: Popover,
    baseline: "newly",
    since: "April 2024",
    status: "https://webstatus.dev/features/popover?q=popover",
  },
  {
    id: uuid++,
    title: "Align Content",
    description:
      "Enables block direction alignment without needing to create a flex or grid layout.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/align-content",
    component: AlignContent,
    baseline: "newly",
    since: "April 2024",
  },
  // {
  //   id: uuid++,
  //   title: "Fullscreen",
  //   description: "Toggle fullscreen programatically",
  //   link: "https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API",
  //   component: Fullscreen,
  //   baseline: "limited",
  // },
  {
    id: uuid++,
    title: "Balanced titles",
    description:
      "Text is wrapped in a way that best balances the number of characters on each line, enhancing layout quality and legibility",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap-style",
    status: "https://webstatus.dev/features/text-wrap-balance?q=text-wrap",
    component: TextBalance,
    baseline: "newly",
    since: "May 2024",
  },
  {
    id: uuid++,
    title: ":has() selector",
    description:
      "Select an element if it contains a matching element specified by its argument, allowing selection of parent or previous sibling elements based on a relative selector. ",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
    component: Has,
    baseline: "newly",
    since: "December 2023",
  },
  {
    id: uuid++,
    title: "Field-sizing",
    description:
      "Control the sizing behavior of elements that are given a default preferred size, such as form control elements",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing",
    component: FieldSizing,
    baseline: "limited",
    status: "https://webstatus.dev/features/field-sizing?q=field-sizing",
  },
];

export type Item = (typeof items)[number];
