PRAGMA encoding = 'UTF-8';

-- Unicorns

CREATE TABLE "unicorns" (
	"number" INTEGER PRIMARY KEY,
	"id" TEXT NOT NULL UNIQUE COLLATE BINARY, -- UUID

	"name" TEXT NOT NULL,
	"favorite_color" TEXT,
	"birthday" DATE NOT NULL,
	"description" TEXT,

	"type" TEXT NOT NULL DEFAULT 'unicorn' CHECK("type" IN ('pegasus', 'unicorn', 'alicorn', 'narwhal', 'rhino', 'horse', 'special')),
	"size" TEXT NOT NULL DEFAULT 'medium' CHECK("size" IN ('tiny', 'small', 'medium', 'large', 'huge', 'humongous')),
	"horse_power" INTEGER NOT NULL CHECK("horse_power" >= 0 AND "horse_power" <= 100),
	"cuteness" INTEGER NOT NULL CHECK("cuteness" >= 0 AND "cuteness" <= 100),
	"magic" INTEGER NOT NULL CHECK("magic" >= 0 AND "magic" <= 100),

	"adopted_at" DATETIME,
	"adopted_by" TEXT,

	"created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "unicorns_name" ON "unicorns" ("name");
CREATE INDEX IF NOT EXISTS "unicorns_birthday" ON "unicorns" ("birthday");
CREATE INDEX IF NOT EXISTS "unicorns_type" ON "unicorns" ("type");
CREATE INDEX IF NOT EXISTS "unicorns_size" ON "unicorns" ("size");
CREATE INDEX IF NOT EXISTS "unicorns_horse_power" ON "unicorns" ("horse_power");
CREATE INDEX IF NOT EXISTS "unicorns_cuteness" ON "unicorns" ("cuteness");
CREATE INDEX IF NOT EXISTS "unicorns_magic" ON "unicorns" ("magic");

CREATE INDEX IF NOT EXISTS "unicorns_adopted_at" ON "unicorns" ("adopted_at");
CREATE INDEX IF NOT EXISTS "unicorns_created_at" ON "unicorns" ("created_at");
CREATE INDEX IF NOT EXISTS "unicorns_updated_at" ON "unicorns" ("updated_at");

-- Appointments

CREATE TABLE IF NOT EXISTS "appointments" (
	"number" INTEGER PRIMARY KEY,
	"id" TEXT NOT NULL UNIQUE COLLATE BINARY, -- UUID
	"patient" TEXT NOT NULL,
	"owner" TEXT NOT NULL,
	"date" DATETIME NOT NULL,

	"created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS "appointments_date" ON "appointments" ("date");
