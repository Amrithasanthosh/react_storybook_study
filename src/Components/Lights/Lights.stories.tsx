import { Meta, StoryObj } from "@storybook/react";
import Lights from "./Lights";

const meta: Meta<typeof Lights> = {
  component: Lights,
  title: "Components/Lights",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const Red: Story = {
  args: { variant: "red" },
};

export const Yellow: Story = { args: { variant: "yellow" } };

export const Grouped: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Lights variant="red" />
        <Lights variant="yellow" />
        <Lights variant="green" />
      </div>
    );
  },
};
