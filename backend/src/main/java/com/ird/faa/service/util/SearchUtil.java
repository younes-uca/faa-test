package com.ird.faa.service.util;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SearchUtil {

    public static Date convert(String date) {
        if(StringUtil.isEmpty(date)) return null;
        try {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            return simpleDateFormat.parse(date);
        } catch (ParseException ex) {
            return null;
        }
    }

    public static java.sql.Date converte(java.util.Date date) {
        if (date != null) {
            return new java.sql.Date(date.getTime());
        } else {
            return null;
        }
    }

    public static String addConstraint(String beanAbrev, String atributeName, String operator, Object value) {
        boolean condition = value != null;
        if (value != null && value.getClass().getSimpleName().equals("String")) {
            condition = condition && !value.equals("");
        }
        if (condition && operator.equals("LIKE")) {
            return " AND " + beanAbrev + "." + atributeName + " " + operator + " '%" + value + "%'";
        } else if (condition) {
            if (value instanceof Boolean) {
            return " AND " + beanAbrev + "." + atributeName + " " + operator + " '" + (value.equals(true)?1:0) + "'";
            } else {
            return " AND " + beanAbrev + "." + atributeName + " " + operator + " '" + value + "'";
            }
        }
        return "";
    }

    public static String addConstraintOr(String beanAbrev, String atributeName, String operator, Object value) {
        boolean condition = value != null;
        if (value != null && value.getClass().getSimpleName().equals("String")) {
        condition = condition && !value.equals("");
        }
        if (condition) {
            return " OR " + beanAbrev + "." + atributeName + " " + operator + " '" + value + "'";
        }
        return "";
    }

    public static String addConstraintMinMax(String beanAbrev, String atributeName, Object valueMin, Object valueMax) {
        String requette = "";
        if (valueMin != null) {
            requette += " AND " + beanAbrev + "." + atributeName + " >= '" + valueMin + "'";
        }
        if (valueMax != null) {
            requette += " AND " + beanAbrev + "." + atributeName + " <= '" + valueMax + "'";
        }
        return requette;
    }

    public static String addConstraintDate(String beanAbrev, String atributeName, String operator, Date value) {
        return addConstraint(beanAbrev, atributeName, operator, converte(value));
    }

    public static String addConstraintDate(String beanAbrev, String atributeName, String operator, String value) {
        return addConstraintDate(beanAbrev, atributeName, operator, convert(value));
    }

    public static String addConstraintMinMaxDate(String beanAbrev, String atributeName, Date valueMin, Date valueMax) {
        return addConstraintMinMax(beanAbrev, atributeName, converte(valueMin), converte(valueMax));
    }

    public static String addConstraintMinMaxDate(String beanAbrev, String atributeName, String valueMin, String valueMax) {
        return addConstraintMinMaxDate(beanAbrev, atributeName, convert(valueMin), convert(valueMax));
    }
}
