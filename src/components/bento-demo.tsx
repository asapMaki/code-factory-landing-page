import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

/**
 * Array of additional services offered by Code Factory
 * Each service is represented as an object with properties for the BentoCard component
 * The className property defines the grid positioning in the larger viewport sizes
 */
const features = [
  {
    Icon: FileTextIcon,
    name: "App Maintenance",
    description:
      "Ongoing support and updates to keep your app running smoothly and securely.",
    href: "/services/maintenance",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-cyan-50 dark:from-cyan-950/30 dark:to-cyan-900/20 opacity-50"></div>
    ),
    // This card spans the entire middle column in the grid on large screens
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "API Integration",
    description:
      "Seamless integration with third-party services and APIs to extend your app's functionality.",
    href: "/services/api-integration",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-950/30 dark:to-indigo-900/20 opacity-50"></div>
    ),
    // This card takes up the top 2/3 of the left column
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "App Localization",
    description:
      "Adapt your app for global markets with multilingual support and cultural considerations.",
    href: "/services/localization",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-950/30 dark:to-emerald-900/20 opacity-50"></div>
    ),
    // This card takes up the bottom 1/3 of the left column
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "App Analytics",
    description:
      "Comprehensive analytics solutions to track user behavior and improve app performance.",
    href: "/services/analytics",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-950/30 dark:to-orange-900/20 opacity-50"></div>
    ),
    // This card takes up the top 1/3 of the right column
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Push Notifications",
    description:
      "Implement effective push notification strategies to boost user engagement and retention.",
    href: "/services/notifications",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-950/30 dark:to-rose-900/20 opacity-50"></div>
    ),
    // This card takes up the bottom 2/3 of the right column
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

/**
 * BentoDemo Component
 * Renders a grid of additional services using the BentoGrid and BentoCard components
 * The grid has a custom layout on large screens defined by the className properties of each feature
 */
export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {/* Map through the features array and render a BentoCard for each service */}
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
