import { Meta, StoryObj } from "@storybook/react";
import AlertBox from "./AlertBox";

const meta: Meta<typeof AlertBox> = {
  title: "Components/AlertBox",
  component: AlertBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: { type: "secondary", children: <div>Secondary Alert</div> },
};

export const Success: Story = {
  args: { type: "success", children: <div>Success Alert</div> },
};

export const Info: Story = {
  args: { type: "info", children: <div>Info Alert</div> },
};

export const Danger: Story = {
  args: { type: "danger", children: <div>Danger Alert</div> },
};

export const Warning: Story = {
  args: { type: "warning", children: <div>warning Alert</div> },
};

export const Light: Story = {
  args: { type: "light", children: <div>Light Alert</div> },
};

export const Dark: Story = {
  args: { type: "dark", children: <div>Dark Alert</div> },
};
