import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/Navigation/TheSubnav.vue";
import { createConditionalExpression } from "@vue/compiler-core";

describe("TheSubnav", () => {
  describe("when user is on jobs page", () => {
    const renderSubNav = () => {
      return render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
    };

    it("displays jobs count", () => {
      const $route = {
        name: "Home",
      };

      render(TheSubnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText("1653");
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when the user is not on jobs page", () => {
    it("does NOT display job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1653");
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
