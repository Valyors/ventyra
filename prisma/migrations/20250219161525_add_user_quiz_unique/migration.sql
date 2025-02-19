/*
  Warnings:

  - A unique constraint covering the columns `[userId,quizId]` on the table `UserQuiz` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserQuiz_userId_quizId_key" ON "UserQuiz"("userId", "quizId");
