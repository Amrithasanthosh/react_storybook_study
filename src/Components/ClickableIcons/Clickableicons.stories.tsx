import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ClickableIcon from "./ClickableIcons";
import { MdDelete, MdEdit } from "react-icons/md";

const meta: Meta<typeof ClickableIcon> = {
  component: ClickableIcon,
  title: "Components/ClickableIcon",
  parameters: {
    backgrounds: {
      values: [
        { name: "Light", value: "#f5f5f5" },
        { name: "Dark", value: "#333333" },
        { name: "Blue", value: "#3498db" },
        { name: "Green", value: "#2ecc71" },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ClickableIconEdit: Story = {
  args: {
    onClick: action("icon clicked"),
    icon: <MdEdit />,
  },
};

export const ClickableIconDelete: Story = {
  args: {
    onClick: action("icon clicked"),
    icon: <MdDelete />,
  },
};
