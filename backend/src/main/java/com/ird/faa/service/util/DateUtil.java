package com.ird.faa.service.util;


import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class DateUtil {

    public static String formateDate(Date date) {
        return formateDate("yyyy-MM-dd hh:mm:ss.SSS", date);
    }

    public static String formateDate(String pattern, Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        if (date != null) {
            return simpleDateFormat.format(date);
        } else {
            return "";
        }
    }

    public static Date parse(String date) {
        if (date == null || date.isEmpty()) {
            return null;
        } else {
            try {
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
                return simpleDateFormat.parse(date);
            } catch (Exception ex) {
                return null;
            }
        }
    }

    public static Date parseTimestamp(String date) {
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
            Date parsedDate = dateFormat.parse(date);
            Timestamp timestamp = new java.sql.Timestamp(parsedDate.getTime());
            return timestamp;
        } catch (Exception e) {
            return null;
        }
    }

    public static java.sql.Date convertFormUtilToSql(java.util.Date date) {
        if (date != null) {
            return new java.sql.Date(date.getTime());
        } else {
            return null;
        }
    }

    public static java.sql.Timestamp convertFormUtilToTimestamp(java.util.Date date) {
        if (date != null) {
            return new java.sql.Timestamp(date.getTime());
        } else {
            return null;
        }
    }

}
