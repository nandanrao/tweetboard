-- MySQL dump 10.13  Distrib 5.6.20, for osx10.7 (x86_64)
--
-- Host: localhost    Database: twitterjs
-- ------------------------------------------------------
-- Server version	5.6.20
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO,POSTGRESQL' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table "Users"
--

DROP TABLE IF EXISTS "Users";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "Users" (
  "id" int(11) unsigned NOT NULL,
  "name" varchar(255) DEFAULT NULL,
  "pictureUrl" text,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "Users"
--

LOCK TABLES "Users" WRITE;
/*!40000 ALTER TABLE "Users" DISABLE KEYS */;
INSERT INTO "Users" VALUES (1,'Zeke',NULL),(2,'Christain',NULL),(3,'Tessa',NULL),(4,'Nimit',NULL),(5,'David',NULL),(6,'Fullstack',NULL),(7,'Class 111',NULL);
/*!40000 ALTER TABLE "Users" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "slots"
--

DROP TABLE IF EXISTS "slots";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "slots" (
  "id" int(2) DEFAULT NULL,
  "tweet_id" int(11) DEFAULT NULL,
  KEY "tweets_to_slots" ("tweet_id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "slots"
--

LOCK TABLES "slots" WRITE;
/*!40000 ALTER TABLE "slots" DISABLE KEYS */;
INSERT INTO "slots" VALUES (7,11),(8,12),(4,65),(5,48),(6,50),(2,52),(1,62),(3,64);
/*!40000 ALTER TABLE "slots" ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table "tweets"
--

DROP TABLE IF EXISTS "tweets";
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE "tweets" (
  "id" int(11) NOT NULL,
  "name" varchar(50) DEFAULT NULL,
  "text" varchar(255) DEFAULT NULL,
  "slotId" int(2) DEFAULT NULL,
  PRIMARY KEY ("id")
);
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table "tweets"
--

LOCK TABLES "tweets" WRITE;
/*!40000 ALTER TABLE "tweets" DISABLE KEYS */;
INSERT INTO "tweets" VALUES (5,'Zeke','Fullstack is great! #fsalove',1),(6,'Christian','Fullstack academy is amazing',2),(7,'Nimit','Fullstack academy instructor is very cool',3),(8,'David','Zeke is mindblowing',4),(9,'Steve(s)','Charlotte is amazing',5),(10,'Nandan','bla bla bla',6),(11,'Bill Clinton','bla bla bla is so whatever',7),(12,'Obama','yadadada',8),(13,'Teddy R.','blah blah',9),(14,'Quintin','yahahahah #yesyesyes',10),(15,'kjl','jk',5),(16,'kuo','iuop',5),(17,'kuo','iuop',9),(18,'yes','hello',4),(19,'hey','lk',7),(20,'hey','lk',7),(21,'sdf','as',6),(22,'ljlk','lk',7),(23,';lk',';l',7),(24,'klj','lk',6),(25,'klj','lk',6),(26,'fd','sdf',8),(27,'fd','sdf',8),(28,'dsf','sdf',9),(29,'dsf','s',10),(30,'df','df',3),(31,'dsf','ssss',7),(32,'sdf','sdf',4),(33,'sd','ddd',3),(34,'lkj','lk',3),(35,';lk','l;',2),(36,'lkj','lklll',7),(37,'ll','lll',5),(38,'ll','llll',5),(39,'lkj','l',4),(40,'ll','lll',7),(41,'kk','kk',3),(42,'kk','kkk',3),(43,'ll','lll',6),(44,'oo','oo',1),(45,'ll','ll',7),(46,'oo','oo',3),(47,'iii','iii',4),(48,'ll','ll',5),(49,'ii','ii',6),(50,'oo','oo',6),(51,'pp','pp',3),(52,'l','l',2),(53,'oo','o',1),(54,'Zeke','IAIAIA',1),(55,'hello','yes',NULL),(56,'jjj','kkk',3),(57,'ll','ll',3),(58,'pp','pp',3),(59,'oo','oo',3),(60,'pp','pp',2),(61,'pp','p',3),(62,'Nando','hey',1),(63,'oooo','ooooo',3),(64,'PPP','PPP',3),(65,'YES','YESYESY',4);
/*!40000 ALTER TABLE "tweets" ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-10-01 16:16:15
