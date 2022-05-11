-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: May 11, 2022 at 08:09 AM
-- Server version: 10.5.15-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tonipek`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `user_id` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  `ship` varchar(40) NOT NULL,
  `text` varchar(400) NOT NULL,
  `post_date` date NOT NULL DEFAULT current_timestamp(),
  `filename` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`user_id`, `post_id`, `ship`, `text`, `post_date`, `filename`) VALUES
(1, 7, 'Sailing boat', 'Esim 1', '2022-05-10', 'c83ac1ea06ca1051cccafed979567683'),
(1, 8, 'Sailing boat', 'Esim 2', '2022-05-10', '7fb9f3df8514a414ba933d5d8a7293c0'),
(1, 9, 'QM2', 'Ship', '2022-05-10', 'de38281165896c15d0d36b13b3f324f0'),
(1, 10, 'testi', 'testi3', '2022-05-10', '3cd0960ae5af359f8382b610223bece6'),
(1, 11, 'Sailing boat', 'testi4', '2022-05-10', '1415ea6f16100c9e637c184b51067e23'),
(1, 12, 'Sailing boat', 'esim 7', '2022-05-10', 'ed53afd2d911643cce04e93ee55f6372'),
(1, 14, 'Yacht', 'Esim 8', '2022-05-10', '0f032fe12e557f5198138a1dee3db206'),
(1, 15, 'Bathtub', 'Cat', '2022-05-10', '4cd1ccd18410f1014a6f88170dfb42fc'),
(1, 16, 'Sailing boat', 'testi', '2022-05-10', 'f092b2a32e64a35dd26b8878b22e4125');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(55) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@admin.com', 'admin123'),
(4, 'MrKala', 'tonikart@live.com', '123'),
(14, 'tonipek', 'tonipek@metropolia.fi', 'Toni2022'),
(15, 'foo', 'tonikart@live.com', '12345');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `test` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `test` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
