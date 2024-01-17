-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Player Name',
    "cards" INTEGER[] DEFAULT ARRAY[0, 1, 2, 20, 21, 22, 40, 41, 42]::INTEGER[],
    "deck" INTEGER[] DEFAULT ARRAY[0, 1, 1, 2, 2, 20, 21, 21, 22, 22, 40, 41, 41, 42, 42]::INTEGER[],
    "level" INTEGER NOT NULL DEFAULT 0,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
