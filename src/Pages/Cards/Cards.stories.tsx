import { action } from "@storybook/addon-actions";
import Card from "./Cards";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Pages/Card",
  component: Card,
  parameters: {
    componentSubtitle: "A customizable card component",
    docs: {
      description: {
        component:
          "A card component with a title, description, image, and customizable actions.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Example Card",
    description: "This is a simple card component",
    imageUrl: "https://via.placeholder.com/300",
    actions: [
      { label: "Action 1", onClick: action("Action 1 clicked") },
      { label: "Action 2", onClick: action("Action 2 clicked") },
    ],
  },
};
