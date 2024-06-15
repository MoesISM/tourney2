import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('656b8b7b-425a-412f-9de5-d7331ec83fe7', '1Odell63@yahoo.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_11223', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('55df252b-3579-4495-9d7e-34b8b8027473', '8Candelario.Hegmann53@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_67890', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('2ba7f83d-2659-4ab7-ba6f-a313ec10d7ad', '22Helene48@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('f2711c62-abe4-49e1-a1b7-06fdb2fdafcc', '29Georgianna63@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('88864f69-285c-4083-ad19-653caecf0042', '36Joana.Sipes@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('5b2d45de-fdbd-4d7a-8e92-42f1ffe4edc4', '43Rozella55@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('32a741fa-0403-47ca-bddb-7d464d88c3ab', '50Bernadine73@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('52fea955-6e71-435c-9139-a3b215381002', '57Tina.Huel@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_67890', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('b040d49c-6c7d-4ef7-abbb-d0cf10aef9f1', '64Dorthy.Schmidt87@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_11223', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e37b8fdf-3f23-45fb-9b7c-76671afc612a', 'Bracket Update', 'The tournament bracket has been updated.', 'Support Team', '74Grayson41@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', '5b2d45de-fdbd-4d7a-8e92-42f1ffe4edc4');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('434fa8f2-7303-4813-91f2-58efb9686b1a', 'Round Robin Announcement', 'The finals are set to begin soon.', 'Support Team', '81Rogelio_Gulgowski42@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '2ba7f83d-2659-4ab7-ba6f-a313ec10d7ad');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3672fe39-cf4f-4335-b54d-df7c2ec81ad7', 'Round Robin Announcement', 'The finals are set to begin soon.', 'Event Coordinator', '88Eliezer.Dach@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', 'f2711c62-abe4-49e1-a1b7-06fdb2fdafcc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f5a692a1-9499-48eb-9d22-a3e4f9dd78e0', 'Finals Notification', 'The match between Team A and Team B has concluded.', 'System', '95Autumn.Ward@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', '88864f69-285c-4083-ad19-653caecf0042');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('59fcb6dd-0213-4bac-b1b9-88543a88ab5e', 'Bracket Update', 'The tournament bracket has been updated.', 'System', '102Arlo.Herman@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '88864f69-285c-4083-ad19-653caecf0042');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2c628dda-dcf3-454d-9f9f-72e3d66473d8', 'Match Update', 'The tournament bracket has been updated.', 'Tournament Organizer', '109Tito50@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '32a741fa-0403-47ca-bddb-7d464d88c3ab');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('76491350-3222-46da-bc74-cca4f8c7e8d7', 'Team Registration Complete', 'Your team has been successfully registered for the tournament.', 'Event Coordinator', '116Billie_Homenick@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '2ba7f83d-2659-4ab7-ba6f-a313ec10d7ad');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('14378df9-726d-475c-bb85-6d4dbbc28d62', 'Bracket Update', 'Your team has been successfully registered for the tournament.', 'Support Team', '123Nya.Rogahn@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('16011c8d-8c0d-426f-b41a-a377b419143b', 'Team Registration Complete', 'The Round Robin matchups have been announced.', 'System', '130Bettie18@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eb6a4c27-5744-4d6a-a4c6-b5f27b84815a', 'Match Update', 'The match between Team A and Team B has concluded.', 'Support Team', '137Celia.Schinner52@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '55df252b-3579-4495-9d7e-34b8b8027473');

INSERT INTO "team" ("id", "name") VALUES ('987e557a-f2ab-435e-ac27-b26b2df503f7', 'Dragons');
INSERT INTO "team" ("id", "name") VALUES ('0e2a03ae-4898-4fd5-983c-ae1178462640', 'Warriors');
INSERT INTO "team" ("id", "name") VALUES ('0bf8c4d2-67eb-494c-9e4d-528c83aa505e', 'Titans');
INSERT INTO "team" ("id", "name") VALUES ('8ee146af-e399-4960-ad28-f02535fa76dc', 'Titans');
INSERT INTO "team" ("id", "name") VALUES ('0950ea0c-8224-42c7-a40f-2f53ec7ee06c', 'Titans');
INSERT INTO "team" ("id", "name") VALUES ('4c0dfd1c-759e-4de3-b2f6-699ccef3e8af', 'Thunderbolts');
INSERT INTO "team" ("id", "name") VALUES ('ca31de0c-b250-46e4-84c1-8c1a1d7da04f', 'Titans');
INSERT INTO "team" ("id", "name") VALUES ('f1c6cd04-3e01-40a1-8a76-4122a93d1c20', 'Panthers');
INSERT INTO "team" ("id", "name") VALUES ('9520bf0d-6017-46b4-a7b1-f2705d3a9a1a', 'Dragons');
INSERT INTO "team" ("id", "name") VALUES ('da439044-a265-44ba-a216-fe5e9b92170a', 'Thunderbolts');

INSERT INTO "tournament" ("id", "name", "status") VALUES ('50b15819-6d4c-466f-83d7-36bceefd27e1', 'Champions Clash', 'Postponed');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('5594361f-ee03-48f0-b247-4ceb9514c8ae', 'Battle Royale', 'Completed');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('dd5ff888-f0cf-4c45-b3e5-b8291cb7d4ad', 'Ultimate Tournament', 'Upcoming');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('92097c76-ebc1-4818-ba2d-3b6c51d978bf', 'Battle Royale', 'Ongoing');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('af153d54-1a25-4df8-8fc5-fc6feb611fd8', 'Ultimate Tournament', 'Cancelled');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('a8e575bd-a78e-4e98-8e52-85e598060f79', 'Victory Cup', 'Cancelled');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('52c93af5-4b86-4b0e-bab3-157139e9983d', 'Ultimate Tournament', 'Completed');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('c6c74813-de37-4083-b571-61659f3a63b8', 'Victory Cup', 'Postponed');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('c635d3ac-3af2-458f-9075-b2de0b7dc2c2', 'Victory Cup', 'Cancelled');
INSERT INTO "tournament" ("id", "name", "status") VALUES ('a6a47dc2-e0a7-4c7d-8130-02efb78794e6', 'Champions Clash', 'Ongoing');

INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('3df6dfed-f5eb-4057-a38b-60060c123211', 67, 'a6a47dc2-e0a7-4c7d-8130-02efb78794e6', 'f1c6cd04-3e01-40a1-8a76-4122a93d1c20', '987e557a-f2ab-435e-ac27-b26b2df503f7', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('d099cf0c-7039-4fd2-a4aa-768857401ca2', 545, 'af153d54-1a25-4df8-8fc5-fc6feb611fd8', 'ca31de0c-b250-46e4-84c1-8c1a1d7da04f', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('a1f1377a-d790-4591-aa6a-6eb66c6480b9', 706, 'c635d3ac-3af2-458f-9075-b2de0b7dc2c2', 'ca31de0c-b250-46e4-84c1-8c1a1d7da04f', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', '987e557a-f2ab-435e-ac27-b26b2df503f7');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('6f95ec3a-1966-4729-8003-916a7b896c12', 118, '5594361f-ee03-48f0-b247-4ceb9514c8ae', '8ee146af-e399-4960-ad28-f02535fa76dc', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', '4c0dfd1c-759e-4de3-b2f6-699ccef3e8af');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('6b1bd79e-6a49-4737-b677-8cb755b0f31f', 622, '5594361f-ee03-48f0-b247-4ceb9514c8ae', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e', '8ee146af-e399-4960-ad28-f02535fa76dc');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('4b9c4cff-348a-47b9-81e7-1fee21ab8b80', 291, 'dd5ff888-f0cf-4c45-b3e5-b8291cb7d4ad', 'ca31de0c-b250-46e4-84c1-8c1a1d7da04f', '9520bf0d-6017-46b4-a7b1-f2705d3a9a1a', 'f1c6cd04-3e01-40a1-8a76-4122a93d1c20');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('4d621fef-63b1-496d-b457-45361e18f443', 58, '52c93af5-4b86-4b0e-bab3-157139e9983d', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e', '8ee146af-e399-4960-ad28-f02535fa76dc', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('63ece3fe-fee8-47d9-a06a-9de8743f1d04', 860, 'dd5ff888-f0cf-4c45-b3e5-b8291cb7d4ad', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('92e5449b-36c0-4782-8a28-46349ce49aef', 715, 'dd5ff888-f0cf-4c45-b3e5-b8291cb7d4ad', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', 'ca31de0c-b250-46e4-84c1-8c1a1d7da04f', 'da439044-a265-44ba-a216-fe5e9b92170a');
INSERT INTO "match" ("id", "round", "tournamentId", "team1Id", "team2Id", "winnerId") VALUES ('68992522-d27f-4ac5-afcb-0742eaeaecff', 563, '52c93af5-4b86-4b0e-bab3-157139e9983d', '0e2a03ae-4898-4fd5-983c-ae1178462640', '0950ea0c-8224-42c7-a40f-2f53ec7ee06c', '9520bf0d-6017-46b4-a7b1-f2705d3a9a1a');

INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('1fa2f3a3-5891-4ef7-875b-8376fc3b0a12', 'af153d54-1a25-4df8-8fc5-fc6feb611fd8', '3df6dfed-f5eb-4057-a38b-60060c123211', '63ece3fe-fee8-47d9-a06a-9de8743f1d04');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('17193340-5a73-4b6b-8345-980634af1f15', 'a8e575bd-a78e-4e98-8e52-85e598060f79', '4d621fef-63b1-496d-b457-45361e18f443', '63ece3fe-fee8-47d9-a06a-9de8743f1d04');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('05219bd7-4108-4109-8833-c948a8d99995', 'a6a47dc2-e0a7-4c7d-8130-02efb78794e6', 'a1f1377a-d790-4591-aa6a-6eb66c6480b9', 'a1f1377a-d790-4591-aa6a-6eb66c6480b9');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('c8b8da3a-9d46-4344-b373-f25dadcb65c9', 'dd5ff888-f0cf-4c45-b3e5-b8291cb7d4ad', 'a1f1377a-d790-4591-aa6a-6eb66c6480b9', '68992522-d27f-4ac5-afcb-0742eaeaecff');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('95ab07e8-4e06-43c8-95a5-86209ab44d06', '92097c76-ebc1-4818-ba2d-3b6c51d978bf', '63ece3fe-fee8-47d9-a06a-9de8743f1d04', 'd099cf0c-7039-4fd2-a4aa-768857401ca2');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('f12b6628-be98-4d80-88d3-2531345eff41', '52c93af5-4b86-4b0e-bab3-157139e9983d', '4d621fef-63b1-496d-b457-45361e18f443', 'd099cf0c-7039-4fd2-a4aa-768857401ca2');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('3176a116-4cf4-406a-9de1-5b5ffb623628', 'a8e575bd-a78e-4e98-8e52-85e598060f79', '92e5449b-36c0-4782-8a28-46349ce49aef', 'a1f1377a-d790-4591-aa6a-6eb66c6480b9');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('6ef31699-9833-497d-b239-8188f43da796', 'a6a47dc2-e0a7-4c7d-8130-02efb78794e6', '3df6dfed-f5eb-4057-a38b-60060c123211', 'd099cf0c-7039-4fd2-a4aa-768857401ca2');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('b1f74460-f1d5-4cf5-8af1-ae4f0d060bfb', '52c93af5-4b86-4b0e-bab3-157139e9983d', '92e5449b-36c0-4782-8a28-46349ce49aef', '63ece3fe-fee8-47d9-a06a-9de8743f1d04');
INSERT INTO "bracket" ("id", "tournamentId", "matchId", "parentMatchId") VALUES ('61361ffd-5171-4c72-8bb0-3cb128a6ac46', '50b15819-6d4c-466f-83d7-36bceefd27e1', '6f95ec3a-1966-4729-8003-916a7b896c12', '4d621fef-63b1-496d-b457-45361e18f443');

INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('e97ec9ce-5e25-47f5-ae71-919f098a1902', 'a8e575bd-a78e-4e98-8e52-85e598060f79', 'ca31de0c-b250-46e4-84c1-8c1a1d7da04f');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('c0946ca9-7d27-4938-9353-4122d04d68b5', '50b15819-6d4c-466f-83d7-36bceefd27e1', '8ee146af-e399-4960-ad28-f02535fa76dc');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('a7d1a335-20ce-4b24-8f63-c47dceb39f4f', '52c93af5-4b86-4b0e-bab3-157139e9983d', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('621ba452-a7b1-450b-b47f-188238d88a48', 'af153d54-1a25-4df8-8fc5-fc6feb611fd8', '0e2a03ae-4898-4fd5-983c-ae1178462640');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('b4efd2b1-4991-4fea-95b2-87dbc02aed1e', 'a8e575bd-a78e-4e98-8e52-85e598060f79', '8ee146af-e399-4960-ad28-f02535fa76dc');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('92a65416-2f6b-4567-9dcf-ca4ec9d48c22', 'c635d3ac-3af2-458f-9075-b2de0b7dc2c2', '8ee146af-e399-4960-ad28-f02535fa76dc');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('f7dc8385-cd06-4f24-8300-7ad8f0a9f2f8', 'dd5ff888-f0cf-4c45-b3e5-b8291cb7d4ad', '8ee146af-e399-4960-ad28-f02535fa76dc');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('9e16d7ae-a1d4-45c2-83b9-4c9a64106e38', '50b15819-6d4c-466f-83d7-36bceefd27e1', '987e557a-f2ab-435e-ac27-b26b2df503f7');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('c8b70e4f-95ef-485c-9a83-936535cd7f31', 'c6c74813-de37-4083-b571-61659f3a63b8', '9520bf0d-6017-46b4-a7b1-f2705d3a9a1a');
INSERT INTO "tournament_team" ("id", "tournamentId", "teamId") VALUES ('5bc289da-5e19-42e2-be56-63307b78de54', 'a6a47dc2-e0a7-4c7d-8130-02efb78794e6', '0bf8c4d2-67eb-494c-9e4d-528c83aa505e');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
