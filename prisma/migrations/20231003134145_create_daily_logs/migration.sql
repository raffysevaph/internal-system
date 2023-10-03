-- CreateTable
CREATE TABLE "daily_logs" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT,
    "yesterday" TEXT,
    "today" TEXT,
    "accomplish" TEXT,
    "impediment" TEXT,
    "daily_journal" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "daily_logs_pkey" PRIMARY KEY ("id")
);
