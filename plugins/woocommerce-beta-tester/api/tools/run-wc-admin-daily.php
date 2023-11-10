<?php

defined( 'ABSPATH' ) || exit;

register_woocommerce_admin_test_helper_rest_route(
	'/tools/run-wc-admin-daily/v1',
	'tools_run_wc_admin_daily'
);

/**
 * A tool to run the daily wc-admin cron.
 */
function tools_run_wc_admin_daily() {
	do_action( 'wc_admin_daily' );

	return true;
}
