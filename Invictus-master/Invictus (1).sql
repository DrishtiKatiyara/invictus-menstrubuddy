-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 20, 2022 at 06:24 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Invictus`
--

-- --------------------------------------------------------

--
-- Table structure for table `Blogs`
--

CREATE TABLE `Blogs` (
  `id` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Blog` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Blogs`
--

INSERT INTO `Blogs` (`id`, `Name`, `Blog`) VALUES
(1, 'Alicia Spinnet', 'I got my first period at the age of 13 which was quite late compared to my friends. The first time was actually terrible and woke me up at night.I think it is really important to accept it the way it is and realise it is an absolutely natural step in every woman\'s life.'),
(2, 'Emily Goldfinch', 'My friends both male and female talk about it openly and help each other when we feel weak during these days.I think its a taboo that must be broken'),
(5, 'Dhruvisha', 'Hello ! Sharing my views !'),
(6, 'Manjusha', 'Hiiiiiii');

-- --------------------------------------------------------

--
-- Table structure for table `Volunteers`
--

CREATE TABLE `Volunteers` (
  `id` int(11) NOT NULL,
  `Name` varchar(256) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `Phone` varchar(256) NOT NULL,
  `Drive` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Volunteers`
--

INSERT INTO `Volunteers` (`id`, `Name`, `Email`, `Phone`, `Drive`) VALUES
(7, 'Dhruvisha', 'dhruvishamondhe01@gmail.com', '7977946897', 'Drive 2'),
(8, 'Dhruvisha', '2019dhruvisha.mondhe@ves.ac.in', '7977946897', 'Drive1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Blogs`
--
ALTER TABLE `Blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Volunteers`
--
ALTER TABLE `Volunteers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Blogs`
--
ALTER TABLE `Blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Volunteers`
--
ALTER TABLE `Volunteers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
