import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const santaListings = pgTable("santa_listings", {
  id: serial("id").primaryKey(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  headline: text("headline").notNull(),
  type: text("type").notNull(),
  bio: text("bio").notNull(),
  experience: text("experience"),
  services: jsonb("services").$type<string[]>().default([]),
  location: text("location").notNull(),
  region: text("region"),
  profileImageUrl: text("profile_image_url"),
  galleryImages: jsonb("gallery_images").$type<string[]>().default([]),
  audioUrl: text("audio_url"),
  youtubeUrl: text("youtube_url"),
  socialLinks: jsonb("social_links").$type<{
    facebook?: string;
    instagram?: string;
    twitter?: string;
    website?: string;
  }>(),
  pricingFrom: text("pricing_from"),
  availableDates: text("available_dates"),
  contactEmail: text("contact_email").notNull(),
  dbsChecked: boolean("dbs_checked").default(false),
  realBeard: boolean("real_beard").default(false),
  homeVisits: boolean("home_visits").default(false),
  corporateEvents: boolean("corporate_events").default(false),
  schoolsNurseries: boolean("schools_nurseries").default(false),
  grottos: boolean("grottos").default(false),
  approved: boolean("approved").default(false),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  type: text("type").notNull(),
  santaSlug: text("santa_slug"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type SantaListing = typeof santaListings.$inferSelect;
export type InsertSantaListing = typeof santaListings.$inferInsert;
export type Enquiry = typeof enquiries.$inferSelect;
export type InsertEnquiry = typeof enquiries.$inferInsert;
