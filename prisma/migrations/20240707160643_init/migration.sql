-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotels" (
    "id" SERIAL NOT NULL,
    "hotelName" TEXT NOT NULL,
    "hotelAddress" TEXT NOT NULL,
    "hotelCity" TEXT NOT NULL,
    "hotelState" TEXT NOT NULL,

    CONSTRAINT "Hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,
    "serviceFees" INTEGER NOT NULL,
    "servicesFeesDecimal" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Hotels_hotelName_key" ON "Hotels"("hotelName");

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
