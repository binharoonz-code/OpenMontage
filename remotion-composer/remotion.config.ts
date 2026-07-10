import { Config } from "@remotion/cli/config";

// This environment blocks downloads from remotion.media (network egress
// policy), so Remotion can't fetch its own headless-shell Chromium build.
// Point it at the Playwright Chromium that's already pre-installed instead.
Config.setBrowserExecutable(
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell"
);
