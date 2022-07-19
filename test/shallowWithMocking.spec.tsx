import { describe, expect, test, vi } from "vitest";
import { shallow } from "../src";
import { ContactsList } from "./ContactsList";

describe("shallowWithMocking", () => {
  test("renders", async () => {
    const wrapper = shallow(<ContactsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
