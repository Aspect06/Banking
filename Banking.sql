CREATE TABLE `savings_accounts` (
	`id` INT(11) NULL DEFAULT NULL,
	`account_name` LONGTEXT NULL DEFAULT '' COLLATE 'latin1_swedish_ci',
	`account_balance` INT(11) NULL DEFAULT '0',
	`account_transactions` LONGTEXT NULL DEFAULT '{}' COLLATE 'latin1_swedish_ci',
	`account_access` LONGTEXT NULL DEFAULT '{}' COLLATE 'latin1_swedish_ci'
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
;
