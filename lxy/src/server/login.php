<?php

  include './base.php';

  $phone = $_POST['phone'];
  $psw = $_POST['psw'];

  $sql = "SELECT * FROM `userlist` WHERE `phone`='$phone' AND `psw`='$psw'";

  $res = mysql_query($sql);

  if (!$res) {
    die('error for mysql: ' . mysql_error());
  }

  $row = mysql_fetch_assoc($res);

  if (!$row) {
    // 没有匹配的数据 登录失败
    echo json_encode(array(
      "code" => 0,
      "message" => "登录失败"
    ));
  } else {
    // 有匹配的数据 登录成功
    echo json_encode(array(
      "code" => 1,
      "message" => "登录成功"
    ));
  }

?>
