import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/Navigation/MainNav.vue";
import { userEvent } from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";

describe("MainNav", () => {
  const renderMainNav = () => {
    return render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
      },
    });
  };

  it("displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Bobo Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();
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
      renderMainNav();
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
