import { action } from "@storybook/addon-actions";
import { addParameters } from "@storybook/svelte";
import Button from "./button.svelte";
import Notes from "./button.notes.md";

export default {
  title: "Button",
  parameters: { notes: Notes }
};

export const text = () => ({
  Component: Button,
  props: { text: "Hello Button" },
  on: { click: action("clicked") }
});
