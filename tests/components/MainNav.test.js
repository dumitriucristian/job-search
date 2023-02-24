import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { userEvent } from "@testing-library/user-event";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent
    );
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when the user logs in", () => {
    it("displays the user profile picture", async () => {
      render(MainNav);

      const profileImage = screen.queryByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument;
      /*
      const signInButton = screen.getByRole("button", { name: /sign in/i });
      await userEvent.click(signInButton);
      expect(profileImage).toBeInTheDocument;
      */
    });
  });
});
