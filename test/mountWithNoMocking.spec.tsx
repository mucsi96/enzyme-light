import { describe, expect, test, vi } from "vitest";
import { ContactRow } from "./ContactRow";
import { ContactsList } from "./ContactsList";
import { mount, waitFor } from '../src'

describe("mountWithNoMocking", () => {
  test("renders", async () => {
    const wrapper = mount(<ContactsList />);
    await waitFor(() => {
      expect(wrapper.find(ContactRow).exists()).toBe(true);
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ContactRow)).toMatchSnapshot();
  });
});
