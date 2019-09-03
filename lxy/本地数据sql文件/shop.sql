# Host: localhost  (Version: 5.5.53)
# Date: 2019-08-31 18:26:01
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goods2"
#

DROP TABLE IF EXISTS `goods2`;
CREATE TABLE `goods2` (
  `goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) DEFAULT NULL,
  `goods_price` varchar(255) DEFAULT NULL,
  `goods_number` varchar(255) DEFAULT NULL,
  `goods_big_logo` varchar(255) DEFAULT NULL,
  `goods_small_logo` varchar(255) DEFAULT NULL,
  `inselect` varchar(255) DEFAULT NULL,
  `goods_introduce` varchar(255) DEFAULT NULL,
  `goods_one_name` varchar(255) DEFAULT NULL,
  `goods_two_name` varchar(255) DEFAULT NULL,
  `goods_value` varchar(255) DEFAULT NULL,
  `two_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Data for table "goods2"
#

/*!40000 ALTER TABLE `goods2` DISABLE KEYS */;
INSERT INTO `goods2` VALUES (1,'项圈狗手链与甜心狗','1999','100','https://www.roseonly.com.cn/upload/products/15531615024928288.png','https://www.roseonly.com.cn/upload/products/15531615024928288_2.png','0','https://www.roseonly.com.cn/upload/products/15531615023562665.jpg','爱礼推荐','玫瑰礼盒-玫瑰公仔系列','2834','1071210040'),(2,'love lock 红玉髓项链20mm','6999','100','https://www.roseonly.com.cn/upload/products/15644737471803587.png','https://www.roseonly.com.cn/upload/products/15643886598255064_1.png','0','https://www.roseonly.com.cn/upload/products/15643886594507910.jpg','爱礼推荐','玫瑰珠宝-loverheart lock系列','7121','1031270004'),(3,'Because I love you 抱抱甜心熊 ','1999','100','https://www.roseonly.com.cn/upload/products/15633490709353869.png','https://www.roseonly.com.cn/upload/products/15633490709353869.png','0','https://www.roseonly.com.cn/upload/products/15633490708785571.jpg','爱礼推荐','玫瑰礼盒-唯爱留声系列','2834','1071360006'),(4,'经典嫣红 单朵版 大型圆球','1314','100','https://www.roseonly.com.cn/upload/products/15208250923466660.png','https://www.roseonly.com.cn/upload/products/15208250923466660_1.png','0','https://www.roseonly.com.cn/upload/products/14932818361058320.jpg','爱礼推荐','永生玫瑰-经典永续系列','1454','1011010014'),(5,'王俊凯特别版.抱抱端坐熊','1999','100','https://www.roseonly.com.cn/upload/products/15633500313399339.png','https://www.roseonly.com.cn/upload/products/15633500313399339_1.png','0','https://www.roseonly.com.cn/upload/products/15633500312844080.jpg','爱礼推荐','玫瑰礼盒-唯爱留声系列','2834','1071360014'),(6,'手捧许愿 520支 80cm','29999','100','https://www.roseonly.com.cn/upload/products/15577258355385057.png','https://www.roseonly.com.cn/upload/products/15577258361021752_1.png','0','https://www.roseonly.com.cn/upload/products/15577258353534770.jpg','爱礼推荐','鲜花玫瑰-爱在满怀系列','32000','1021040063'),(7,'甜心熊花筒朱砂 33支','2399','100','https://www.roseonly.com.cn/upload/products/15659270864621681.png','https://www.roseonly.com.cn/upload/products/15659270870599785_1.png','0','https://www.roseonly.com.cn/upload/products/15659270862906752.jpg','爱礼推荐','鲜花玫瑰-玫瑰公仔系列','2520','1021210006'),(8,'经典朱砂 19支 80cm','1999','100','https://www.roseonly.com.cn/upload/products/15457366485329166.png','https://www.roseonly.com.cn/upload/products/15458019018773646_1.png','0','https://www.roseonly.com.cn/upload/products/15457310850473628.jpg','爱礼推荐','鲜花玫瑰-经典永续系列','2834','1021010001'),(9,'项圈狗手链与甜心狗','1999','100','https://www.roseonly.com.cn/upload/products/15531615024928288.png','https://www.roseonly.com.cn/upload/products/15531615024928288_2.png','0','https://www.roseonly.com.cn/upload/products/15531615023562665.jpg','爱礼推荐','玫瑰礼盒-玫瑰公仔系列','2834','1071210040'),(10,'手捧许愿 520支 80cm','29999','100','https://www.roseonly.com.cn/upload/products/15577258355385057.png','https://www.roseonly.com.cn/upload/products/15577258361021752_1.png','0','https://www.roseonly.com.cn/upload/products/15577258353534770.jpg','爱礼推荐','鲜花玫瑰-爱在满怀系列','32000','1021040063');
/*!40000 ALTER TABLE `goods2` ENABLE KEYS */;

#
# Structure for table "userlist"
#

DROP TABLE IF EXISTS `userlist`;
CREATE TABLE `userlist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "userlist"
#

/*!40000 ALTER TABLE `userlist` DISABLE KEYS */;
INSERT INTO `userlist` VALUES (1,'13797854196','123456'),(2,'15971324588','123456'),(3,'13788324453','123456'),(4,'13434554365','123456'),(7,'',''),(8,'',''),(9,'',''),(10,'',''),(11,'',''),(12,'','');
/*!40000 ALTER TABLE `userlist` ENABLE KEYS */;
