import { action } from "@storybook/addon-actions";
import Notes from "./container.notes.md";
import Container from "./container.svelte";

export default {
  title: "Container",
  parameters: { notes: Notes }
};

export const basic = () => ({
  Component: Container,
  props: { text: "Sample text", bg_color: "bg-red-400" }
});
